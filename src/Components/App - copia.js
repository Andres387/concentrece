// import React from 'react';
// import './App.css';
// import ItemDigimonList from './components/ItemDigimonList';


// // const sample = {
// //   name: "Koromon",
// //   img: "https://digimon.shadowsmith.com/img/koromon.jpg",
// //   level: "In Training"
// // }
// const limit = 5;

// function App() {
//   const[ListDigimons, setListDigimons] = React.useState([]);
//   const[displayDigimons, setDisplayDigimons] = React.useState([]);
//   const[search, setSearch] = React.useState("");
//   // const[shouldUpdate, setShouldUpdate] = React.useState(false);
//   const[page, setPage] = React.useState(1);
//   const offSet = (page-1)*limit;
//   // const myFunction = React.useCallback((parametro1, parametro2) => {

//   // }[shouldUpdate]);

//   // const myObjeto = React.useMemo ({},[shouldUpdate]);

//   // const myObjeto1 = React.useRef (()=> 4 + 5);
//   const myInput = React.useRef (null);

//   React.useEffect (()=>{
//     myInput.current.addEventListener('keyup', ()=>{
//                                                   console.log(myInput.current.value);
//                                                   setSearch(myInput.current.value);
//                                                 })
//   },[])

//   React.useEffect(()=>{
//     const filteredData = ListDigimons.filter((digimon) => {
//       console.log(digimon.name, search)
//       return digimon.name.toLowerCase().includes(search.toLowerCase()) ||
//       digimon.level.toLowerCase().includes(search.toLowerCase())
//     });
//     setDisplayDigimons(filteredData);
//     },[search]);
//   // React.useEffect(()=>{
//   //   console.log("render function");
//   //     // render monting  did monting
//   //   },[myFunction, myObject]);
//   const fetchData = () => {
//     fetch("https://digimon-api.vercel.app/api/digimon?limit="+limit+"&offset="+offSet)
//       .then(response =>response.json())
//       .then(dataJson => {
//         setListDigimons(dataJson);
//         setDisplayDigimons(dataJson);
//       });
//   };


//   React.useEffect(() => {
//     fetchData();
//   },[offSet])

//   React.useEffect(()=>{
//     console.log("disparo render");
//     //updatin render monting
//   });
//   React.useEffect(()=>{
//   console.log("disparo render did monting");
//     // render monting  did monting
//   },[]);

//   React.useEffect(()=>{
//     console.log("disparo render should up monting");
//       // render monting  did monting
//       setTimeout(()=> {
//         // setShouldUpdate(true)
//       },2000);
//     },[]);

//     React.useEffect(()=>{
//       return ()=> null;
//         // component will  Un monting
//       },[]);
//   const next = () => {
//     setPage(page => page +1);
//   };
//   const back = () => {
//     setPage(page => page -1);
//   };

//   console.log(page, offSet, limit);

//   return (
//     <div className="App">
//       <h1>Digimon PryyBook</h1>
//       <p>BUSCALO POR NOMBRE O LEVEL <input ref={myInput}/></p>
//       {displayDigimons.map(digimon => <ItemDigimonList 
//           name={digimon.name} 
//           img={digimon.img} 
//           level={digimon.level}
//           key = {digimon.name} 
//           />
//         )
//       }
//       {page !== 1 && <button onClick={back}>Atras</button>}
//       <button onClick={next}>Siguiente</button>
//     </div>
//   );
// }

// export default App;
