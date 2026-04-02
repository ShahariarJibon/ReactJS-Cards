import Card from "./components/card";

const App = () => {
  const items = [
    {
      id: 1,
      name: "Kiwi Blast uno",
      link:"https://images.unsplash.com/photo-1627769124375-8f797bb17140?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG1hdGNoYXxlbnwwfHwwfHx8MA%3D%3D",
      price: 12,
      items: ["Kiwi", "Ice Cream", "Milk"],
    },
    {
      id: 2,
      name: "Mango Delight",
      link:"https://plus.unsplash.com/premium_photo-1694540110932-0c03eaae840c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG1hdGNoYXxlbnwwfHwwfHx8MA%3D%3D",
      price: 10,
      items: ["Mango", "Yogurt", "Honey"],
    },
    {
      id: 3,
      name: "Strawberry Crush",
      link:"https://images.unsplash.com/photo-1589080366527-92a1126ec8f2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG1hdGNoYXxlbnwwfHwwfHx8MA%3D%3D",
      price: 14,
      items: ["Strawberry", "Milk", "Sugar"],
    },
    {
      id: 4,
      name: "Orange Zest",
      link:"https://images.unsplash.com/photo-1566657040726-62fd1e379726?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG1hdGNoYXxlbnwwfHwwfHx8MA%3D%3D",
      price: 9,
      items: ["Orange", "Lemon", "Mint"],
    },
    {
      id: 5,
      name: "Watermelon Wave",
      link:"https://plus.unsplash.com/premium_photo-1694540110881-84add98c0a75?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fG1hdGNoYXxlbnwwfHwwfHx8MA%3D%3D",
      price: 8,
      items: ["Watermelon", "Ice", "Basil"],
    },
    {
      id: 6,
      name: "Pineapple Punch",
      link:"https://images.unsplash.com/photo-1618308113210-3a8a1778f910?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fG1hdGNoYXxlbnwwfHwwfHx8MA%3D%3D",
      price: 11,
      items: ["Pineapple", "Coconut Milk", "Ginger"],
    },
    {
      id: 7,
      name: "Blueberry Bliss",
      link:"https://plus.unsplash.com/premium_photo-1695054405168-c0f0840e7805?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fG1hdGNoYXxlbnwwfHwwfHx8MA%3D%3D",
      price: 15,
      items: ["Blueberry", "Almond Milk", "Vanilla"],
    },
    {
      id: 8,
      name: "Peach Paradise",
      link:"https://images.unsplash.com/photo-1695191499096-8a7ffe8d5b8e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fG1hdGNoYXxlbnwwfHwwfHx8MA%3D%3D",
      price: 13,
      items: ["Peach", "Cream", "Cinnamon"],
    },
    {
      id: 9,
      name: "Grape Galaxy",
      link:"https://images.unsplash.com/photo-1749104028327-a33087ea4f47?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fG1hdGNoYXxlbnwwfHwwfHx8MA%3D%3D",
      price: 10,
      items: ["Grape", "Apple Juice", "Mint"],
    },
    {
      id: 10,
      name: "Coconut Dream",
      link:"https://images.unsplash.com/photo-1634473115412-8fa5b647ef59?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fG1hdGNoYXxlbnwwfHwwfHx8MA%3D%3D",
      price: 16,
      items: ["Coconut", "Pineapple", "Milk"],
    },
  ];

  return (
    <div className="container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}
    >
      {
        items.map(function(elem){
          return <Card key={elem.id} name={elem.name} price={elem.price} link={elem.link}/>
        })
      }
    </div>
  );
};

export default App;
