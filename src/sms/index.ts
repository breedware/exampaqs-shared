export const SMSTemplates = {
  // 1. Student Arrival
  arrival: ({ studentName, status, time, guardian, schoolName }: { studentName: string; status: 'early' | 'late' | 'on-time'; time: string; guardian?: string; schoolName: string }) => {
    return `Attendance Alert: ${studentName} arrived ${status} at ${time}. Dropped off by: ${guardian || 'Self'}. - ${schoolName}`;
  },

  // 2. Student Departure
  departure: ({ studentName, time, guardian, schoolName }: { studentName: string; time: string; guardian?: string; schoolName: string }) => {
    return `Departure Alert: ${studentName} left school at ${time}. Picked up by: ${guardian || 'Self'}. - ${schoolName}`;
  },

  // 3. Excused Absence
  excused: ({ studentName, date, parentName, schoolName }: { studentName: string; date: string; parentName: string; schoolName: string }) => {
    return `Excuse Confirmed: ${studentName} is marked Excused for ${date}, per request by ${parentName}. - ${schoolName}`;
  },

  // 4. Unexcused Absence
  absent: ({ studentName, date, schoolName }: { studentName: string; date: string; schoolName: string }) => {
    return `Urgent: ${studentName} is marked ABSENT today, ${date}. Please contact the office to verify. - ${schoolName}`;
  },

  // 5. Transaction OTP
  otp: ({ otpCode, purpose, schoolName }: { otpCode: string; purpose: string; schoolName: string }) => {
    return `Your OTP for ${purpose} is ${otpCode}. Valid for 5 mins. Do not share. - ${schoolName}`;
  }
};

/**
 * Computes the number of SMS segments (pages) for a given string.
 * This assumes standard GSM-7 encoding.
 * * Note: If using non-GSM characters (like emojis or special symbols), 
 * the limits drop to 70 chars (single) and 67 chars (multi-part).
 */
export const smsPagesComputer = (content: string): number => {
  const charCount = content.length;

  // If the message is empty, it technically consumes 0 pages (or 1 depending on carrier billing)
  if (charCount === 0) return 0;

  // Standard GSM-7 limit for a single message
  const SINGLE_PAGE_LIMIT = 160;
  
  // Limit for multi-part messages (7 characters reserved for UDH)
  const MULTI_PAGE_LIMIT = 152;

  if (charCount <= SINGLE_PAGE_LIMIT) {
    return 1;
  } else {
    // Math.ceil ensures that even 1 extra character triggers a new page
    return Math.ceil(charCount / MULTI_PAGE_LIMIT);
  }
};

