"use client";

import { useEffect, useState } from "react";

type Subscriber = {
  timestamp: string;
  email: string;
};

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const response = await fetch("/api/subscribers");
      const data = await response.json();

      if (response.ok) {
        setSubscribers(data.subscribers);
      } else {
        setError(data.error || "Failed to load subscribers");
      }
    } catch (err) {
      setError("Error loading subscribers");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFF6F5] via-[#FFE5E8] to-[#FFD6DC] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="mb-8">
            <h1 className="font-['Playfair_Display'] font-black text-3xl md:text-5xl text-[#A50019] mb-2">
              Newsletter Subscribers
            </h1>
            <p className="font-['Kanit'] text-gray-600">
              Total subscribers: <span className="font-semibold text-[#A50019]">{subscribers.length}</span>
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="font-['Kanit'] text-gray-500">Loading subscribers...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-['Kanit'] text-red-600">{error}</p>
            </div>
          ) : subscribers.length === 0 ? (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
              <p className="font-['Kanit'] text-gray-500">No subscribers yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#A50019] text-white">
                    <th className="font-['Kanit'] font-semibold text-left px-4 py-3 rounded-tl-lg">#</th>
                    <th className="font-['Kanit'] font-semibold text-left px-4 py-3">Email Address</th>
                    <th className="font-['Kanit'] font-semibold text-left px-4 py-3 rounded-tr-lg">Subscribed On</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map((subscriber, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-pink-50 transition-colors`}
                    >
                      <td className="font-['Kanit'] px-4 py-3 text-gray-600">{index + 1}</td>
                      <td className="font-['Kanit'] px-4 py-3 text-gray-900 font-medium">{subscriber.email}</td>
                      <td className="font-['Kanit'] px-4 py-3 text-gray-600 text-sm">{formatDate(subscriber.timestamp)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-gray-200">
            <a 
              href="/" 
              className="inline-flex items-center gap-2 font-['Kanit'] text-[#A50019] hover:text-[#8a0015] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
