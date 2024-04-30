// ShowConfirmationDialog.tsx

import React from 'react';
import { Candidate } from '../types'; // Import Candidate interface from types.ts

interface ConfirmationDialogProps {
    candidateToDelete: Candidate | null;
    onDelete: () => void;
    onCancel: () => void;
}

const ShowConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ candidateToDelete, onDelete, onCancel }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-lg mb-4">Are you sure to delete data number {candidateToDelete?.No} Position title {candidateToDelete?.PositionTitle}?</p>
                <div className="flex justify-end">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mr-2 rounded" onClick={onDelete}>Yes</button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={onCancel}>No</button>
                </div>
            </div>
        </div>
    );
};

export default ShowConfirmationDialog;
