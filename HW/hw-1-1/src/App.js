import './App.css';
import { Card } from './Card';

function App() {
  const cards = [
    {
      title: 'title1',
      text: 'text1'
    },
    {
      title: 'title2',
      text: 'text2'
    },
    {
      title: 'title3',
      text: 'text3'
    }
  ]

  return (
  <>
  
  <div className="App">
    {cards.map(el => (
      <Card text={el.text} title={el.title}/>
    ))}
  </div>

  </>
  )
}

export default App;
