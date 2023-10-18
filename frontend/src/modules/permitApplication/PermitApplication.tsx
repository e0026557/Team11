import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

interface FormDataType {
  userId: string;
  location: string;
  area: string;
  startDate: Date | null;
  endDate: Date | null;
  status: string;
}

interface EditData {
  location: string;
  area: string;
  startDate: Date | null;
  endDate: Date | null;
  status: string;
  userId: number;
  permitId: number;
}

const PermitApplication = ({ editData }: { editData?: EditData | null }) => {
  const currentDate = new Date();
  const [formData, setFormData] = useState<FormDataType>({
    userId: "", // You can get the user ID from your authentication system
    location: editData?.location ?? "No Selection",
    area: editData?.area ?? "No Selection",
    startDate: editData?.startDate ?? null,
    endDate: editData?.endDate ?? null,
    status: "Pending", // Assuming the initial status is "Pending"
  });

  useEffect(() => {
    if (editData) {
      // If editData is provided, populate the form with its values
      setFormData({
        userId: "", // You can get the user ID from your authentication system
        location: editData.location,
        area: editData.area,
        startDate: editData.startDate,
        endDate: editData.endDate,
        status: editData.status,
      });
    }
  }, [editData]);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStartDateChange = (date: Date) => {
    setFormData({
      ...formData,
      startDate: date,
      endDate: date > formData.endDate! ? date : formData.endDate,
    });
  };

  const handleEndDateChange = (date: Date) => {
    setFormData({
      ...formData,
      endDate: date,
    });
  };

  const handleSubmit = () => {
    const apiUrl = "https://api.example.com/permit-applications";
    // Make a POST request to the API using Axios
    axios
      .post(apiUrl, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Handle success response from the API
        console.log("Success:", response.data);
      })
      .catch((error) => {
        // Handle error here
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="pt-8 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-3xl font-semibold leading-6 text-gray-900">
              Permit Application
            </h1>
          </div>
        </div>
        <div className="mt-8">
          <label className="block text-sm font-medium text-gray-600">
            Location
          </label>
          <select
            name="location"
            onChange={handleInputChange}
            value={formData.location}
            className="mt-1 p-2 border border-gray-300 rounded-md w-1/3"
          >
            <option value="No Selection">No Selection</option>
            <option value="East Coast Park">East Coast Park</option>
            <option value="Pasir Ris Park">Pasir Ris Park</option>
            <option value="Changi Beach">Changi Beach</option>
            <option value="West Coast Park">West Coast Park</option>
          </select>
        </div>
        <div className="mt-8">
          <label className="block text-sm font-medium text-gray-600">
            Campsite Area
          </label>
          <select
            name="campsiteArea"
            onChange={handleInputChange}
            value={formData.area}
            className="mt-1 p-2 border border-gray-300 rounded-md w-1/3"
          >
            <option value="No Selection">No Selection</option>
            <option value="A">Area A</option>
            <option value="B">Area B</option>
            <option value="C">Area C</option>
            <option value="D">Area D</option>
            <option value="E">Area E</option>
          </select>
        </div>
        <div className="mt-8">
          <label className="block text-sm font-medium text-gray-600">
            Start Date
          </label>
          <DatePicker
            selected={formData.startDate}
            onChange={handleStartDateChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Start Date"
            minDate={currentDate}
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-600">
            End Date
          </label>
          <DatePicker
            selected={formData.endDate}
            onChange={handleEndDateChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            dateFormat="dd/MM/yyyy"
            placeholderText="Select End Date"
            minDate={formData.startDate}
          />
        </div>
        <div className="mt-8">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default PermitApplication;
