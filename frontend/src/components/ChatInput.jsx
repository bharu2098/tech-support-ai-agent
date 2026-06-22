import { useState, useEffect } from "react";
import { sendMessage } from "../services/api";

function ChatInput({
  setHistory,
  setHasChat,
  setStatus,
  setPreviousIssue,
  setCurrentIssue,
  setDeviceInfo,
  setPlan,
  setResponse,
  selectedQuery,
}) {

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!selectedQuery) return;

    queueMicrotask(() => {
      setMessage(selectedQuery);
    });
  }, [selectedQuery]);

  const handleSend = async (query = message) => {

    if (!query.trim()) return;

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
        currentIssue: data.current_issue || query,
        deviceInfo: data.device_info || null,
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

      setMessage("");

    } catch (error) {

      console.error(
        "Chat Error:",
        error
      );

      setStatus("Offline");

      setResponse(
        "Unable to connect to backend."
      );
    }
  };

  return (
    <div className="p-6 border-t border-slate-800 bg-slate-950">

      <div className="flex gap-3">

        <input
          type="text"
          value={message}
          placeholder="Describe your technical issue..."
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          className="
            flex-1
            p-4
            rounded-xl
            bg-white
            text-black
            placeholder-gray-500
            border
            border-gray-300
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />

        <button
          onClick={() => handleSend()}
          className="
            bg-blue-600
            hover:bg-blue-700
            transition-all
            duration-200
            px-6
            rounded-xl
            text-white
            font-bold
          "
        >
          ➜
        </button>

      </div>

    </div>
  );
}

export default ChatInput;