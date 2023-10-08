import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PermitApplication from "../permitApplication/PermitApplication";

interface CampsiteData {
  location: string;
  campsiteArea: string;
  startDate: Date;
  endDate: Date;
  status: string;
  userId: number;
  permitId: number;
}

const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editData, setEditData] = useState<CampsiteData>({
    location: "",
    campsiteArea: "",
    startDate: new Date(),
    endDate: new Date(),
    status: "",
    userId: 0,
    permitId: 0,
  });
  const navigate = useNavigate();

  const permits = [
    {
      permitId: 1,
      userId: 1,
      startDate: new Date(),
      endDate: new Date(),
      location: "East Coast Park",
      campsiteArea: "A",
      status: "Pending",
    },
    {
      permitId: 2,
      userId: 1,
      startDate: new Date(),
      endDate: new Date(),
      location: "West Coast Park",
      campsiteArea: "B",
      status: "Approved",
    },
    {
      permitId: 3,
      userId: 1,
      startDate: new Date(),
      endDate: new Date(),
      location: "Changi Beach",
      campsiteArea: "C",
      status: "Approved",
    },
  ];

  const handleEditClick = (rowData: CampsiteData) => {
    console.log("Editing:", rowData);
    setEditData((prev) => ({ ...rowData }));
    setIsModalVisible(true);
  };

  console.log("-.-.-.-EditData", editData);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="pt-8 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-3xl font-semibold leading-6 text-gray-900">
              Dashboard
            </h1>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => navigate("/apply")}
            >
              <FontAwesomeIcon icon={faPlus} /> Apply for Campsite Permit
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        S/N
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Location
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Area
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Start Date
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        End Date
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {permits.map((permit, idx) => (
                      <tr key={permit.permitId}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {idx + 1}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {permit.location}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {permit.campsiteArea}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {permit.startDate.toString()}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {permit.endDate.toString()}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {permit.status}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <button
                            className="text-blue-500 hover:text-blue-700 cursor-pointer"
                            onClick={() => handleEditClick(permit)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isVisible={isModalVisible}
        onClose={closeModal}
        editData={editData}
      />
    </>
  );
};

export default Dashboard;
interface EditData {
  location: string;
  campsiteArea: string;
  startDate: Date | null;
  endDate: Date | null;
  status: string;
  userId: number;
  permitId: number;
}

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  editData: EditData | null; // Assuming EditData is the type/interface for your editData object
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, editData }) => {
  return (
    // Modal implementation using Tailwind CSS4
    <>
      <Backdrop isVisible={isVisible} onClose={onClose} />
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 ${
          isVisible ? "visible" : "invisible"
        }`}
      >
        <div className="bg-white p-8 rounded shadow-lg w-3/4 h-3/4">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={onClose}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <PermitApplication editData={editData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface BackdropProps {
  isVisible: boolean;
  onClose: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ isVisible, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-black opacity-50 z-50 transition-opacity ${
        isVisible ? "visible" : "invisible"
      }`}
      onClick={onClose}
    ></div>
  );
};
