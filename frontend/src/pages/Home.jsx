import { useState, useEffect, useRef } from "react";

import { sendMessage } from "../services/api";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import WelcomeCard from "../components/WelcomeCard";
import ExampleQueries from "../components/ExampleQueries";
import StatusCard from "../components/StatusCard";
import MemoryCard from "../components/MemoryCard";
import PlanCard from "../components/PlanCard";
import ResponseCard from "../components/ResponseCard";
import ChatInput from "../components/ChatInput";
import Footer from "../components/Footer";

function Home() {

  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("chatHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  const [hasChat, setHasChat] = useState(false);

  const [status, setStatus] = useState("Idle");
  const [previousIssue, setPreviousIssue] = useState("");
  const [plan, setPlan] = useState([]);
  const [response, setResponse] = useState("");

  const bottomRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(
      "chatHistory",
      JSON.stringify(history)
    );
  }, [history]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [response]);

  const handleHistoryClick = (chat) => {

    setHasChat(true);

    setStatus(
      chat.status || "Completed"
    );

    setPreviousIssue(
      chat.question || ""
    );

    setPlan(
      chat.plan || []
    );

    setResponse(
      chat.response || ""
    );
  };

  const handleExampleQuery = async (query) => {

    setStatus("Executing");

    try {

      const data = await sendMessage(query);

      if (data?.error) {

        setStatus("Offline");

        setResponse(data.error);

        return;
      }

      setHasChat(true);

      const chatData = {
        question: query,
        status: data.status || "Completed",
        previousIssue: data.previous_issue || "",
        plan: data.plan || [],
        response: data.response || "",
      };

      setHistory((prev) => {

        const filtered = prev.filter(
          (item) => item.question !== query
        );

        return [
          chatData,
          ...filtered,
        ];
      });

      setStatus(
        data.status || "Completed"
      );

      setPreviousIssue(query);

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

  const handleClearChat = () => {

    setHasChat(false);

    setStatus("Idle");
    setPreviousIssue("");
    setPlan([]);
    setResponse("");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-950 text-white">

      <Sidebar
        history={history}
        onHistoryClick={handleHistoryClick}
        onClearChat={handleClearChat}
      />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Header />

        <div className="flex-1 p-6 overflow-y-auto">

          <WelcomeCard />

          {!hasChat && (
            <ExampleQueries
              onSelectQuery={handleExampleQuery}
            />
          )}

          {hasChat && (
            <>
              <StatusCard
                status={status}
              />

              <MemoryCard
                previousIssue={previousIssue}
              />

              <PlanCard
                plan={plan}
              />

              <ResponseCard
                response={response}
                status={status}
              />

              <div ref={bottomRef}></div>
            </>
          )}

        </div>

        <ChatInput
          setHistory={setHistory}
          setHasChat={setHasChat}
          setStatus={setStatus}
          setPreviousIssue={setPreviousIssue}
          setPlan={setPlan}
          setResponse={setResponse}
        />

        <Footer />

      </div>

    </div>
  );
}

export default Home;