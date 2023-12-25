import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import the toast library

const AddTask = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm();

    // Assume you have a user context that provides current user information
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        // You can customize the loading indicator based on your design
        return <p>Loading...</p>;
    }

    const onAddTask = async (data) => {
        try {
            // Include the user email directly within taskData
            data.email = user.email;

            // Use Axios to make a POST request to your backend API
            const response = await axios.post('http://localhost:5000/task', data);

            if (response.status === 200) {
                console.log('Task added successfully:', data);
                reset(); // Reset the form after successful submission
                toast.success('Task added successfully!'); // Show success message
            } else {
                console.error('Failed to add task:', response.statusText);
                toast.error('Failed to add task'); // Show error message
            }
        } catch (error) {
            console.error('Error:', error.message);
            toast.error('Error adding task'); // Show error message
        }
    };

    const onSubmit = (data) => {
        onAddTask(data);
    };

    return (
        <div>
            <div className="bg-[#0da1bf] p-4 md:p-4 lg:p-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <h2 className="text-2xl my-5 md:text-3xl lg:text-3xl font-extrabold">
                        Add Task
                    </h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="md:flex  mb-4 lg:mb-8">
                        <div className="form-control md:w-full lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Task Title</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Task Title"
                                    className="input input-bordered w-full"
                                    {...register('name', { required: 'Task title is required' })}
                                />
                            </label>
                            {errors.name && (
                                <span className="text-red-500">{errors.name.message}</span>
                            )}
                        </div>
                        <div className="form-control md:w-full md:ml-3 md:-mt-1 lg:w-1/2 ml-0 lg:ml-4 mt-4 lg:mt-0">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Description"
                                    className="input input-bordered w-full"
                                    {...register('description', {
                                        required: 'Description is required',
                                    })}
                                />
                            </label>
                            {errors.description && (
                                <span className="text-red-500">
                                    {errors.description.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="md:flex mb-4 lg:mb-8">
                        <div className="form-control md:w-full lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Priority</span>
                            </label>
                            <label className="input-group">
                                <select
                                    className="select input input-bordered w-full"
                                    id="selectPriority"
                                    {...register('priority', { required: 'Priority is required' })}
                                >
                                    <option value="" defaultValue="" disabled>
                                        Select priority
                                    </option>
                                    <option value="Low">Low</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="High">High</option>
                                </select>
                            </label>
                            {errors.priority && (
                                <span className="text-red-500">{errors.priority.message}</span>
                            )}
                        </div>
                        <div className="form-control md:w-full md:ml-3 md:-mt-1 lg:w-1/2 ml-0 lg:ml-4 mt-4 lg:mt-0">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <label className="input-group ">
                                <Controller
                                    control={control}
                                    name="taskDate"
                                    render={({ field }) => (
                                        <DatePicker
                                            {...field}
                                            selected={field.value || null}
                                            onChange={(date) => field.onChange(date)}
                                            placeholderText="Select a date"
                                            className="input input-bordered w-full"
                                        />
                                    )}
                                />
                            </label>
                            {errors.taskDate && (
                                <span className="text-red-500">{errors.taskDate.message}</span>
                            )}
                        </div>
                    </div>

                    <input type="submit" value="Add Task" className="btn btn-block mt-3" />
                </form>
            </div>
        </div>
    );
};

export default AddTask;
