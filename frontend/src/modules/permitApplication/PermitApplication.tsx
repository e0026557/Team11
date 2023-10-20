import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

interface FormDataType {
  userId: number;
  location: string;
  area: string;
  startDate: Date | null;
  endDate: Date | null;
  status?: number;
  permitId?: number;
}

interface EditData {
  userId: number;
  permitId?: number;
  location: string;
  area: string;
  startDate: Date | null;
  endDate: Date | null;
  status?: number;
}

interface PermitApplicationProps {
  permitId?: number;
  editData?: EditData;
}

const PermitApplication = ({ permitId, editData }: PermitApplicationProps) => {
  const currentDate = new Date();
  const [formData, setFormData] = useState<FormDataType>({
    userId: editData?.userId ?? 1,
    location: editData?.location ?? "No Selection",
    area: editData?.area ?? "No Selection",
    startDate: editData?.startDate ?? null,
    endDate: editData?.endDate ?? null,
    permitId: editData?.permitId ?? 0,
  });

  useEffect(() => {
    if (editData) {
      // If editData is provided, populate the form with its values
      setFormData({
        userId: editData.userId, // You can get the user ID from your authentication system
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
    const apiUrl =
      "https://smkq9xe67e.execute-api.ap-southeast-1.amazonaws.com/dev/api/permit/createpermit";

    axios
      .post(
        apiUrl,
        { ...formData, userId: sessionStorage.getItem("userId") },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // Handle success response from the API
        console.log("Success:", response.data);
        toast.success("Permit created successfully!");
      })
      .catch((error) => {
        // Handle error here
        console.error("Error:", error);
        toast.error("Permit application failed");
      });
  };

  const handleEdit = (permitId: number | undefined, formData: EditData) => {
    const apiUrl = `https://smkq9xe67e.execute-api.ap-southeast-1.amazonaws.com/dev/api/permit/editpermit/${permitId}`;

    axios
      .put(
        apiUrl,
        { ...formData, userId: sessionStorage.getItem("userId") },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // Handle success response from the API
        console.log("Success:", response.data);
        toast.success("Permit updated successfully!");
      })
      .catch((error) => {
        // Handle error here
        console.error("Error:", error);
        toast.error("Permit application update failed");
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
            <option value="FarEast">FarEast</option>
            <option value="Bedok">Bedok</option>
            <option value="Chua Chu Kang">Chua Chu Kang</option>
            <option value="Jurong">Jurong</option>
            <option value="Lazarus Island">Lazarus Island</option>
          </select>
        </div>
        <div className="mt-8">
          <label className="block text-sm font-medium text-gray-600">
            Campsite Area
          </label>
          <select
            name="area"
            onChange={handleInputChange}
            value={formData.area}
            className="mt-1 p-2 border border-gray-300 rounded-md w-1/3"
          >
            <option value="No Selection">No Selection</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
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
          {editData ? (
            <button
              onClick={() => handleEdit(permitId, formData)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right"
            >
              Update application
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PermitApplication;
