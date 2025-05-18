import { useState } from "react";

const ChatInput = ({ onSubmit }) => {
    const [question, setQuestion] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (question.trim()) {
            onSubmit(question);
            setQuestion("");
        }
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
                <div className="mb-4">
                    <label htmlFor="question" className="block text-gray-700 font-medium mb-2">
                        Ask a Question
                    </label>
                    <div className="relative">
                        <input 
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            id="question"
                            placeholder="Enter your question"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                    </div>
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Ask Gemini
                </button>
            </form>
        </div>
    )
}

export default ChatInput;