type ISlotPayload = {
  tutorProfileId: string;
  day: string;
  startTime: string;
  endTime: string;
};

const createSlot = async (payload: ISlotPayload) => {
  console.log(payload);
};

export const slotServices = { createSlot };
