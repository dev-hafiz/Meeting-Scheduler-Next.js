import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CalendarCheck, Clock, MapPin, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TimeDateSelection from "./TimeDateSelection";
import UserFormInfo from "./UserFormInfo";
import ReactDOMServer from "react-dom/server";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { app } from "@/config/FirebaseConfig";
import { toast } from "sonner";
import Plunk from "@plunk/node";
import { render } from "@react-email/components";
import Email from "@/emails";
import { useRouter } from "next/navigation";

function MeetingTimeDateSelection({ eventInfo, businessInfo }) {
  const [date, setDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState();
  const [enableTimeSlot, setEnabledTimeSlot] = useState(false);
  const [selectedTime, setSelectedTime] = useState();
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userNote, setUserNote] = useState("");
  const [prevBooking, setPrevBooking] = useState([]);
  const [step, setStep] = useState(1);
  const router = useRouter();
  const db = getFirestore(app);

  const plunk = new Plunk(process.env.NEXT_PUBLIC_PLUNK_API_KEY);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    eventInfo?.duration && createTimeSlot(eventInfo?.duration);
  }, [eventInfo]);
  const createTimeSlot = (interval) => {
    const startTime = 8 * 60; // 8 AM in minutes
    const endTime = 22 * 60; // 10 PM in minutes
    const totalSlots = (endTime - startTime) / interval;
    const slots = Array.from({ length: totalSlots }, (_, i) => {
      const totalMinutes = startTime + i * interval;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      const formattedHours = hours > 12 ? hours - 12 : hours; // Convert to 12-hour format
      const period = hours >= 12 ? "PM" : "AM";
      return `${String(formattedHours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")} ${period}`;
    });

    // console.log(slots);
    setTimeSlots(slots);
  };

  const handleDateChange = (date) => {
    // Validate the date to ensure it's a valid Date object
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      console.error("Invalid date passed to handleDateChange:", date);
      setEnabledTimeSlot(false); // Disable time slots if the date is invalid
      return;
    }

    setDate(date);

    // Format the date to get the day of the week
    const day = format(date, "EEEE");

    // Check if the selected day is available in businessInfo
    if (businessInfo?.daysAvailable?.[day]) {
      getPrevEventBooking(date);
      setEnabledTimeSlot(true);
    } else {
      setEnabledTimeSlot(false);
    }
  };

  const handleScheduleEvent = async () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regex.test(userEmail) == false) {
      toast("Enter valid email address");
      return;
    }
    const docId = Date.now().toString();
    setLoading(true);
    await setDoc(doc(db, "ScheduledMeetings", docId), {
      businessName: businessInfo.businessName,
      businessEmail: businessInfo.email,
      selectedTime: selectedTime,
      selectedDate: date,
      formatedDate: format(date, "PPP"),
      formatedTimeStamp: format(date, "t"),
      duration: eventInfo.duration,
      locationUrl: eventInfo.locationUrl,
      eventId: eventInfo.id,
      id: docId,
      userName: userName,
      userEmail: userEmail,
      userNote: userNote,
    }).then((resp) => {
      toast("Meeting Scheduled successfully!");
      sendEmail(userName);
    });
  };

  const sendEmail = (user) => {
    const emailHtml = ReactDOMServer.renderToStaticMarkup(
      <Email
        businessName={businessInfo?.businessName}
        date={
          date instanceof Date && !isNaN(date)
            ? format(date, "PPP")
            : "Invalid date"
        }
        duration={eventInfo?.duration}
        meetingTime={selectedTime}
        meetingUrl={eventInfo?.locationUrl}
        userFirstName={user}
      />
    );

    plunk.emails
      .send({
        to: userEmail,
        subject: `Hi ${user}, here is your meeting schedule`,
        body: emailHtml,
      })
      .then((resp) => {
        // console.log(resp);
        router.replace("/confirmation");
      });
  };

  //* Used to fatch Previous Booking for given event

  const getPrevEventBooking = async (date_) => {
    const q = query(
      collection(db, "ScheduledMeetings"),
      where("selectedDate", "==", date_),
      where("eventId", "==", eventInfo.id)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // console.log("-->", doc.data());
      setPrevBooking((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <div
      className="p-5 py-10 shadow-lg m-5 border-t-8
    mx-10
    md:mx-26
    lg:mx-56
    my-10"
      style={{ borderTopColor: eventInfo?.themeColor }}
    >
      <Image src="/logo.svg" alt="logo" width={150} height={150} />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
        {/* Meeting Info  */}
        <div className="p-4 border-r">
          <h2>{businessInfo?.businessName}</h2>
          <h2 className="font-bold text-3xl">
            {eventInfo?.eventName ? eventInfo?.eventName : "Meeting Name"}
          </h2>
          <div className="mt-5 flex flex-col gap-4">
            <h2 className="flex gap-2">
              <Clock />
              {eventInfo?.duration} Min{" "}
            </h2>
            <h2 className="flex gap-2">
              <MapPin />
              {eventInfo?.locationType} Meeting{" "}
            </h2>
            <h2 className="flex gap-2">
              <CalendarCheck />
              {date instanceof Date && !isNaN(date.getTime())
                ? format(date, "PPP")
                : "Invalid date"}
            </h2>
            {selectedTime && (
              <h2 className="flex gap-2">
                <Timer />
                {selectedTime}{" "}
              </h2>
            )}

            <Link
              href={eventInfo?.locationUrl ? eventInfo?.locationUrl : "#"}
              className="text-primary"
            >
              {eventInfo?.locationUrl}
            </Link>
          </div>
        </div>
        {/* Time & Date Selction  */}
        {step == 1 ? (
          <TimeDateSelection
            date={date}
            enableTimeSlot={enableTimeSlot}
            handleDateChange={handleDateChange}
            setSelectedTime={setSelectedTime}
            timeSlots={timeSlots}
            selectedTime={selectedTime}
            prevBooking={prevBooking}
          />
        ) : (
          <UserFormInfo
            setUserName={setUserName}
            setUserEmail={setUserEmail}
            setUserNote={setUserNote}
          />
        )}
      </div>
      <div className="flex gap-3 justify-end">
        {step == 2 && (
          <Button variant="outline" onClick={() => setStep(1)}>
            Back
          </Button>
        )}
        {step == 1 ? (
          <Button
            className="mt-10 float-right"
            disabled={!selectedTime || !date}
            onClick={() => setStep(step + 1)}
          >
            Next
          </Button>
        ) : (
          <Button
            disabled={!userEmail || !userName}
            onClick={handleScheduleEvent}
          >
            {loading ? <LoaderIcon className="animate-spin" /> : "Schedule"}
          </Button>
        )}
      </div>
    </div>
  );
}

export default MeetingTimeDateSelection;
