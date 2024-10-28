import { useState } from 'react';

function App() {
  const [electricity, setElectricity] = useState(0); // kWh
  const [food, setFood] = useState(0); // kg
  const [water, setWater] = useState(0); // liters
  const [transportation, setTransportation] = useState(0); // km
  const [waste, setWaste] = useState(0); // kg
  const [diet, setDiet] = useState('meat'); // diet type
  const [totalFootprint, setTotalFootprint] = useState(null); // Store the total carbon footprint

  const emissionFactors = {
    electricity: 0.5, // kg CO2e per kWh
    food: 13.65, // average emission factor for food (based on your previous setup)
    water: 0.001, // kg CO2e per liter
    transportation: 1.25, // average kg CO2e per km
    waste: 1.5, // average kg CO2e per kg
    diet: {
      meat: 8.5, // kg CO2e per day
      vegetarian: 4, // kg CO2e per day
      vegan: 2.5 // kg CO2e per day (average of 2 and 3)
    }
  };

  const calculateFootprint = () => {
    const electricityFootprint = electricity * emissionFactors.electricity;
    const waterFootprint = water * emissionFactors.water;
    const transportationFootprint = transportation * emissionFactors.transportation;
    const wasteFootprint = waste * emissionFactors.waste;
    const dietFootprint = food * emissionFactors.diet[diet];

    const total = electricityFootprint + waterFootprint + transportationFootprint + wasteFootprint + dietFootprint;

    setTotalFootprint(total); // Set the total footprint value
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center p-6"
      style={{
        backgroundImage: `url('src/assets/img.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-green-600">Carbon Footprint Calculator</h1>

        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Electricity Usage (kWh):</span>
            <input
              type="number"
              value={electricity}
              onChange={(e) => setElectricity(Number(e.target.value))}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Food Consumed (Kg):</span>
            <input
              type="number"
              value={food}
              onChange={(e) => setFood(Number(e.target.value))}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Water Usage (liters):</span>
            <input
              type="number"
              value={water}
              onChange={(e) => setWater(Number(e.target.value))}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Transportation (km):</span>
            <input
              type="number"
              value={transportation}
              onChange={(e) => setTransportation(Number(e.target.value))}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Waste (kg):</span>
            <input
              type="number"
              value={waste}
              onChange={(e) => setWaste(Number(e.target.value))}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Diet Type:</span>
            <select
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            >
              <option value="meat">Meat-based</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
            </select>
          </label>
        </div>

        <button
          onClick={calculateFootprint}
          className="mt-6 w-full bg-green-600 text-white py-2 rounded-md shadow hover:bg-green-700 transition duration-300"
        >
          Calculate Carbon Footprint
        </button>

        {totalFootprint !== null && (
          <div className="mt-6 text-center text-xl text-gray-700">
            Total Carbon Footprint: <span className="text-green-600 font-bold">{totalFootprint.toFixed(2)} kg CO₂ Emission</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
