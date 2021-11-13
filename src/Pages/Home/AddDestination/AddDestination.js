import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './AddDestination.css';

const AddDestination = () => {

    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        axios
            .post("https://lit-reef-17054.herokuapp.com/addService", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("added Successfully")
                    reset()
                        history.push("/services")
                }
            });
    };

    return (
        <div className="mt-4 add-des-sec">
            <div className="add-destination py-4">
                <h2 className="text-center">Add Your Destination</h2>
                <hr />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>

                    <textarea {...register("description")} placeholder="Description"/>

                    <input type="number" {...register("price")} placeholder="Price for per person"/>

                    <input {...register("img")} placeholder="Image Url"/>

                    <input className="submit-btn" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddDestination;