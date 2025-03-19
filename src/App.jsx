import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);
  const handleSortByDate=()=>{
    const sortData = [...data.sort((a,b)=> new Date(b.date) - new Date(a.date))];
    setData(sortData);
  }
  const handleSortByViews=()=>{
    const sortData = [...data.sort((a,b)=> (b.views) - (a.views))];
    setData(sortData);
  }
  return (
    <>
      <h1>Date & Views Table</h1>
      <button onClick={()=>handleSortByDate()}>Sort By Date </button>
      <button onClick={()=>handleSortByViews()}>Sort By Views </button>
      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Views</td>
            <td>Article</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
