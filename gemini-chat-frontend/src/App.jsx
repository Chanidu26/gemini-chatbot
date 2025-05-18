import { useState } from 'react'
import './App.css'
import { fetchChatResponse } from './services/api'
import Loading from './components/Loading'
import ChatInput from './components/ChatInput'
import ChatResponse from './components/ChatResponse'

function App() {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const data = await fetchChatResponse(question);
      setResponse(data);
    } catch (error) {
      setError('Failed to fetch response');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 mb-2">
            Chat Bot 
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ask questions and get intelligent answers powered by Google's Gemini AI
          </p>
        </header>
        
        <ChatInput onSubmit={handleQuestionSubmit} />
        
        <div className="mt-8">
          {loading && <Loading />}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md text-red-700 my-4">
              <p className="font-medium">Error</p>
              <p>{error}</p>
            </div>
          )}
          {response && <ChatResponse response={response} />}
        </div>
      </div>
    </div>
  )
}

export default App