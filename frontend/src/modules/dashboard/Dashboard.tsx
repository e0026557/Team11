import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PermitApplication from "../permitApplication/PermitApplication";
import axios from "axios";
import { toast } from "react-toastify";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface CampsiteData {
  location: string;
  area: string;
  startDate: Date;
  endDate: Date;
  status?: number;
  userId: number;
  permitId: number;
}

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [permitsList, setPermitsList] = useState<CampsiteData[]>([]);
  const [editData, setEditData] = useState<CampsiteData>({
    location: "",
    area: "",
    startDate: new Date(),
    endDate: new Date(),
    status: 0,
    userId: 0,
    permitId: 0,
  });
  const navigate = useNavigate();

  const handleEditClick = (rowData: CampsiteData) => {
    console.log("Editing:", rowData);
    setEditData((prev) => ({
      ...rowData,
      startDate: new Date(rowData.startDate),
      endDate: new Date(rowData.endDate),
    }));
    setIsModalVisible(true);
  };

  console.log("-.-.-.-EditData", editData);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const permitsListResponse = await axios.get(
          "https://pjwui6c4nj.execute-api.ap-southeast-1.amazonaws.com/dev/permitapi/permit"
        );
        const permitsList = permitsListResponse.data;
        console.log("permitsList: ", permitsList);

        setPermitsList(permitsList);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log("error: ", error);
        toast.error(
          "An error occurred while retrieving records. Please try again.",
          {
            toastId: "dashboard-retrieve-error",
          }
        );
      }
    })();
  }, []);

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
                    {permitsList.length ? (
                      permitsList.map((permit, idx) => (
                        <tr key={permit.permitId}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {idx + 1}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {permit.location}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {permit.area}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {permit.startDate
                              ? new Date(permit.startDate).toLocaleString()
                              : "N/A"}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {permit.endDate
                              ? new Date(permit.endDate).toLocaleString()
                              : "N/A"}
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
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={6}
                          className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500"
                        >
                          {isLoading ? "Loading..." : "No records found"}
                        </td>
                      </tr>
                    )}
                    {}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        onClose={closeModal}
        editData={editData}
      />
    </>
  );
};

export default Dashboard;
interface EditData {
  location: string;
  area: string;
  startDate: Date | null;
  endDate: Date | null;
  status?: number;
  userId: number;
  permitId: number;
}

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  editData: EditData;
  setIsModalVisible?: any;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, editData, setIsModalVisible }) => {
  return (
    // Modal implementation using Tailwind CSS4
    <>
      <Backdrop isVisible={isVisible} onClose={onClose} />
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 ${
          isVisible ? "visible" : "invisible"
        }`}
      >
        <div className="bg-white p-8 rounded shadow-lg w-3/4 h-3/4 relative">
          <div className="absolute top-4 right-4">
            <button type="button" onClick={onClose}>
              <FontAwesomeIcon
                icon={faTimes}
                className="text-gray-500 text-xl"
              />
            </button>
          </div>
          <div className="modal-content">
            <PermitApplication
              editData={editData}
              permitId={editData?.permitId}
              setIsModalVisible={setIsModalVisible}
            />
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
