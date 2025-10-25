import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {

    const handleAddCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries())
        console.log(newCoffee);

        fetch('http://localhost:3000/coffees' , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then (data => {
            if(data.insertedId){
              console.log('Coffee added successfully')
              Swal.fire({
                  title: "Drag me!",
                  icon: "success",
                  draggable: true
              });

            }
        })
    } 

  return (
    <div className=" p-24">
      <div className=" p-12 text-center space-y-4">
        <h1 className="text-6xl"> Add Coffee</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut possimus
          officia quasi porro libero aliquam minus nihil quia nisi quae,
          mollitia rerum iusto odio consequuntur exercitationem vero unde saepe
          minima vitae assumenda officiis doloribus! Inventore quia excepturi
          totam ducimus quos.
        </p>
      </div>
      <form onSubmit={handleAddCoffee} action="">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">            
            <label className="label">Name</label>
            <input type="text" name="name" className="input w-full" placeholder="Coffe Name" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">            
            <label className="label">Quantity</label>
            <input type="text" name="quantity" className="input w-full" placeholder="Quantity" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">            
            <label className="label">Supplier</label>
            <input type="text" name="supplier" className="input w-full" placeholder="Supplier" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">            
            <label className="label">Taste</label>
            <input type="text" name="taste" className="input w-full" placeholder="Taste" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">            
            <label className="label">Price</label>
            <input type="text" name="price" className="input w-full" placeholder="Price" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">            
            <label className="label">Details</label>
            <input type="text" name="details" className="input w-full" placeholder="Details" />
          </fieldset>
          

        </div>

        <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box  border p-4">            
            <label className="label">Photo</label>
            <input type="text" name="photo" className="input w-full" placeholder="Photo Url" />
          </fieldset>

          <button className="btn w-full">Add Coffee</button>


      </form>
    </div>
  );
};

export default AddCoffee;
