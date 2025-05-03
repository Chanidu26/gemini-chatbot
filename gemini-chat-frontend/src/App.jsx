import { useState } from 'react'
import './App.css'
import { fetchChatResponse } from './services/api'
import Loading from './components/Loading'
import ChatInput from './components/ChatInput'
import ChatResponse from './components/ChatResponse'

function App() {

  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

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
    <>
      <div className='App'>
        <h1>Chatbot</h1>
        <ChatInput onSubmit={handleQuestionSubmit} />
        {loading && <Loading />}
        {response && <ChatResponse response={response} />}
      </div>
    </>
  )
}

export default App
