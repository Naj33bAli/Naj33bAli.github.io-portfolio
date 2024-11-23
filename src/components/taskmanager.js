import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { PlusCircle, CheckCircle, Trash2, Clock } from 'lucide-react';
import { Phone } from 'lucide-react';


const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete portfolio website', status: 'in-progress', deadline: '2024-12-01' },
    { id: 2, title: 'Update resume', status: 'completed', deadline: '2024-11-25' }
  ]);
  const [newTask, setNewTask] = useState({ title: '', deadline: '' });
  const [isHovered, setIsHovered] = useState(false);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.title.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: newTask.title,
          status: 'in-progress',
          deadline: newTask.deadline
        }
      ]);
      setNewTask({ title: '', deadline: '' });
    }
  };

  const toggleStatus = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: task.status === 'completed' ? 'in-progress' : 'completed' }
        : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Task Manager</h1>

          {/* Add Task Form */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <form onSubmit={addTask} className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Enter new task..."
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="date"
                    value={newTask.deadline}
                    onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
                  >
                    <PlusCircle size={20} />
                    Add Task
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Tasks List */}
          <div className="grid gap-4">
            {tasks.map(task => (
              <Card 
                key={task.id}
                className={`hover:shadow-md transition-shadow ${
                  task.status === 'completed' ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => toggleStatus(task.id)}
                        className={`p-1 rounded-full transition-colors duration-300 ${
                          task.status === 'completed' 
                            ? 'text-green-600 hover:text-green-700' 
                            : 'text-gray-400 hover:text-gray-600'
                        }`}
                      >
                        <CheckCircle size={24} />
                      </button>
                      <div>
                        <h3 className={`text-lg ${
                          task.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-900'
                        }`}>
                          {task.title}
                        </h3>
                        {task.deadline && (
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Clock size={16} />
                            {formatDate(task.deadline)}
                          </div>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-red-500 hover:text-red-600 transition-colors duration-300"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {tasks.length === 0 && (
            <div className="text-center text-gray-500 mt-8">
              No tasks yet. Add a new task to get started!
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            I'm currently open to new opportunities. Feel free to reach out!
          </p>
          <a
            href="tel:+16127351500"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? "(612) 735-1500" : "Contact Me"} <Phone size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </>
  );
};

export default TaskManager;
