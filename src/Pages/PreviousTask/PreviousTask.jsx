import { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import {  useLocation, useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import axios from 'axios';
import { AuthContext } from "../../AuthProvider/AuthProvider";

const itemsPerPage = 4;

const PreviousTask = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const location = useLocation();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:5000/task')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error.message);
      });
  }, []);

  const userTasks = tasks.filter(task => task.email === email);
  const [taskDate, setTaskDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const priority = ['Low', 'Moderate', 'High'];
  const status = ['to-do', 'ongoing', 'completed'];
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const displayedTasks = userTasks.slice(indexOfFirstItem, indexOfLastItem);

  const openModal = (user) => {
    console.log(user)
    setTaskDate(null)
    setSelectedTask(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setIsModalOpen(false);
  };
  const handleDelete = id => {
    console.log(id)
    Swal.fire({
        title: 'Are you sure?',
        text: "Delete Test won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:5000/task/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your task has been deleted.',
                            'success'
                        )
                        const remainingTask = userTasks.filter(task=> task._id !== id);
                        setTasks(remainingTask);
                
                    }
                })

        }
    })
}

  

const handleUpdateTest = async (e) => {
    try {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const selectPriority = document.getElementById("selectPriority");
        const selectStatus = document.getElementById("selectStatus");
        const name = form.get('name');
        const description = form.get('description');
        const priority = selectPriority.value;
        const status = selectStatus.value;
        const taskDate = form.get('taskDate');

        const updateTask = { name, description, taskDate, priority, status };

        const response = await fetch(`http://localhost:5000/task/${selectedTask._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateTask),
        });

        if (!response.ok) {
            throw new Error('Task update failed');
        }

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: 'Success!',
                text: 'Task Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Ok',
            });

            // Assuming data is the updated task data
            const updatedTaskIndex = tasks.findIndex(task => task._id === selectedTask._id);
            const updatedTasks = [...tasks];
            updatedTasks[updatedTaskIndex] = data.updatedTask;

            setTasks(updatedTasks);
        } else {
            console.log('No update');
        }
    } catch (error) {
        console.error('Error updating task:', error);
    }
};


  const filteredTask = userTasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(filteredTask);


    return (
        <div>

            <div className='overflow-x-auto justify-center items-center text-center px-5 md:px-10 lg:px-20'>
                {isModalOpen && selectedTask && (
                    <div className="fixed inset-0 z-50 overflow-auto bg-[#CBE4E9]   bg-opacity-50 flex">
                        <div className="relative p-4 max-w-xl m-auto bg-[#CBE4E9] w-full">
                            <div className=" md:p-4 lg:p-24">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                    <h2 className="text-xl mb-3 md:text-2xl lg:text-2xl font-extrabold">
                                        Update Test
                                    </h2>

                                    <p className="text-right">
                                        <button className="text-center text-lg bg-red-400 w-6 h-6" onClick={closeModal}>x</button>
                                    </p>
                                </div>
                                <form onSubmit={handleUpdateTest} >

                                    <div className="md:flex  mb-4 lg:mb-8">
                                        <div className="form-control md:w-full lg:w-1/2">
                                            <label className="label">
                                                <span className="label-text">Task Title</span>
                                            </label>
                                            <label className="input-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    defaultValue={selectedTask.name}

                                                    className="input input-bordered w-full"
                                                    required
                                                />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-full lg:w-1/2 ml-0 lg:ml-4 mt-4 lg:mt-0">
                                            <label className="label">
                                                <span className="label-text">description</span>
                                            </label>
                                            <label className="input-group">
                                                <input
                                                    type="text"
                                                    name="description"
                                                    defaultValue={selectedTask.description}
                                                    className="input input-bordered w-full"
                                                    required
                                                />
                                            </label>
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
                                                    defaultValue={selectedTask.priority}
                                                    required
                                                >

                                                    {priority.map((priority, index) => (
                                                        <option key={index} value={priority}>
                                                            {priority}
                                                        </option>
                                                    ))}
                                                </select>
                                            </label>

                                        </div>
                                        <div className="form-control md:w-full lg:w-1/2 ml-0 lg:ml-4 mt-4 lg:mt-0">
                                            <label className="label">
                                                <span className="label-text">Date</span>
                                            </label>
                                            <label className="input-group">
                                                <DatePicker
                                                    selected={taskDate || (selectedTask && new Date(selectedTask.taskDate))}
                                                    onChange={(date) => {
                                                        console.log(date);
                                                        setTaskDate(date);
                                                    }}
                                                    name="taskDate"
                                                    className="input input-bordered w-full"
                                                    required
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="md:flex mb-4 lg:mb-8">
                                        <div className="form-control md:w-full lg:w-full">
                                            <label className="label">
                                                <span className="label-text">Status</span>
                                            </label>
                                            <label className="input-group">
                                                <select
                                                    className="select input input-bordered w-full"
                                                    id="selectStatus"
                                                    defaultValue={selectedTask.status}
                                                    required
                                                >

                                                    {status.map((status, index) => (
                                                        <option key={index} value={status}>
                                                            {status}
                                                        </option>
                                                    ))}
                                                </select>
                                            </label>

                                        </div>

                                    </div>

                                    <input type="submit" value="Update Task" className="btn btn-block" />

                                </form>
                            </div>

                        </div>
                    </div>

                )}
  
                <table className="table">

                    <thead>
                        <tr className="text-center">
                            <th></th>
                            <th className="text-white text-base">Title</th>
                            <th className="text-white text-base">Description </th>
                            <th className="text-white text-base">Priority</th>
                            <th className="text-white text-base">Date</th>
                            <th className="text-white text-base">Update</th>
                            <th className="text-white text-base">Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredTask.map((task, index) => (
                            <tr className="text-center" key={task._id}>
                                <td className="text-white ">{index + 1}</td>
                                <td className="text-white ">{task.name}</td>
                                <td className="text-white ">
                                    {task.description.length > 20
                                        ? `${task.description.slice(0, 20)}...`
                                        : task.description}
                                </td>
                                <td className="text-white ">{task.priority}</td>
                                <td className="text-white ">{task.taskDate}</td>
                                <td className="text-white"><button onClick={() => openModal(task)} >Edit</button></td>
                                <td>
                                    <FaTrash onClick={() => handleDelete(task._id)} className="text-red-500 ml-8"></FaTrash>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default PreviousTask;

