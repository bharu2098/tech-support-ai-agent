import { useState, useEffect, useRef } from "react";

import { sendMessage } from "../services/api";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import WelcomeCard from "../components/WelcomeCard";
import ExampleQueries from "../components/ExampleQueries";
import StatusCard from "../components/StatusCard";
import MemoryCard from "../components/MemoryCard";
import DeviceInfoCard from "../components/DeviceInfoCard";
import PlanCard from "../components/PlanCard";
import ResponseCard from "../components/ResponseCard";
import ChatInput from "../components/ChatInput";
import Footer from "../components/Footer";

function Home() {

  const [history, setHistory] = useState(() => {
    const savedHistory =
      localStorage.getItem("chatHistory");

    return savedHistory
      ? JSON.parse(savedHistory)
      : [];
  });

  const [hasChat, setHasChat] =
    useState(false);

  const [status, setStatus] =
    useState("Idle");

  const [previousIssue, setPreviousIssue] =
    useState("");

  const [currentIssue, setCurrentIssue] =
    useState("");

  const [deviceInfo, setDeviceInfo] =
    useState(null);

  const [plan, setPlan] =
    useState([]);

  const [response, setResponse] =
    useState("");

  const bottomRef = useRef(null);

  // Save History
  useEffect(() => {

    localStorage.setItem(
      "chatHistory",
      JSON.stringify(history)
    );

  }, [history]);

  // Auto Scroll
  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [response]);

  // Restore Chat From Sidebar
  const handleHistoryClick = (chat) => {

    setHasChat(true);

    setStatus(
      chat.status || "Completed"
    );

    setPreviousIssue(
      chat.previousIssue || ""
    );

    setCurrentIssue(
      chat.question || ""
    );

    setDeviceInfo(
      chat.deviceInfo || null
    );

    setPlan(
      chat.plan || []
    );

    setResponse(
      chat.response || ""
    );
  };

  // Example Query Auto Send
  const handleExampleQuery = async (
    query
  ) => {

    setStatus("Executing");

    try {

      const data =
        await sendMessage(query);

      if (data?.error) {

        setStatus("Offline");

        setResponse(data.error);

        return;
      }

      setHasChat(true);

      const chatData = {
        question: query,
        status:
          data.status || "Completed",
        previousIssue:
          data.previous_issue || "",
        deviceInfo:
          data.device_info || null,
        plan:
          data.plan || [],
        response:
          data.response || "",
      };

      setHistory((prev) => {

        const filtered =
          prev.filter(
            (item) =>
              item.question !== query
          );

        return [
          chatData,
          ...filtered,
        ];
      });

      setStatus(
        data.status || "Completed"
      );

      setPreviousIssue(
        data.previous_issue || ""
      );

      setCurrentIssue(
        data.current_issue || query
      );

      setDeviceInfo(
        data.device_info || null
      );

      setPlan(
        data.plan || []
      );

      setResponse(
        data.response || ""
      );

    } catch (error) {

      console.error(error);

      setStatus("Offline");

      setResponse(
        "Unable to connect to backend."
      );
    }
  };

  // Clear Current Chat
  const handleClearChat = () => {

    setHasChat(false);

    setStatus("Idle");

    setPreviousIssue("");

    setCurrentIssue("");

    setDeviceInfo(null);

    setPlan([]);

    setResponse("");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-950 text-white">

      <Sidebar
        history={history}
        onHistoryClick={
          handleHistoryClick
        }
        onClearChat={
          handleClearChat
        }
      />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Header />

        <div className="flex-1 p-6 overflow-y-auto">

          <WelcomeCard />

          {!hasChat && (
            <ExampleQueries
              onSelectQuery={
                handleExampleQuery
              }
            />
          )}

          {hasChat && (
            <>

              <StatusCard
                status={status}
              />

              <MemoryCard
                previousIssue={
                  previousIssue
                }
                currentIssue={
                  currentIssue
                }
              />

              {status !== "Unsupported" &&
                status !== "Greeting" && (
                  <DeviceInfoCard
                    deviceInfo={
                      deviceInfo
                    }
                  />
              )}

              {status !== "Unsupported" &&
                status !== "Greeting" && (
                  <PlanCard
                    plan={plan}
                  />
              )}

              <ResponseCard
                response={response}
                status={status}
              />

              <div
                ref={bottomRef}
              ></div>

            </>
          )}

        </div>

        <ChatInput
          setHistory={setHistory}
          setHasChat={setHasChat}
          setStatus={setStatus}
          setPreviousIssue={
            setPreviousIssue
          }
          setCurrentIssue={
            setCurrentIssue
          }
          setDeviceInfo={
            setDeviceInfo
          }
          setPlan={setPlan}
          setResponse={
            setResponse
          }
        />

        <Footer />

      </div>

    </div>
  );
}

export default Home;