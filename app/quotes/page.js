import { db } from '../../firebase/config'
import { collection, doc, getDocs, query, addDoc } from '@firebase/firestore'

async function getQuotes() {
  const quotes = query(collection(db, 'quotes'))
  const querySnapshot = await getDocs(quotes)
  const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  return data
}

export default async function Page() {
  const quotes = await getQuotes();
  return (<>
    <h2 className='m-4 text-colorAccent text-3xl'>Quotes</h2>
    {
      quotes.map((quote) => (
        <div className='m-4' key={quote.content}>
          <p className='dark:text-white text-2xl'>{quote.content}</p>
          <p className='dark:text-white'>{quote.author}</p>
        </div>
      ))
    }
  </>)
}
