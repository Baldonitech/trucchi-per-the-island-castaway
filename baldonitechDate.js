/**
 * BaldonitechDate - Simple Date Utilities
 * Author: Baldonitech
 * License: Custom
 */

const BaldonitechDate = {
    /**
     * Returns the current date in YYYY-MM-DD format.
     * @returns {string} - The formatted current date.
     */
    getCurrentDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    },

    /**
     * Formats a Date object as DD/MM/YYYY.
     * @param {Date} date - The Date object to format.
     * @returns {string} - The formatted date.
     */
    formatDate(date) {
        if (!(date instanceof Date)) return '';
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
};

// Example usage:
// console.log(BaldonitechDate.getCurrentDate()); // Output: 2025-06-24 (example)
// console.log(BaldonitechDate.formatDate(new Date())); // Output: 24/06/2025

module.exports = BaldonitechDate;
