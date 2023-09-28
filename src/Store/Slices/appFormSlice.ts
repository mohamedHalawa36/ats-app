import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAppForm = createAsyncThunk("appForm", async () => {
  const res = await fetch(
    "http://127.0.0.1:3100/api/version/programs/programId/application-form"
  );
  const data = await res.json();
  return data;
});
const initialState: AppForm = {
  data: {
    id: "",
    type: "",
    attributes: {
      coverImage: "",
      personalInformation: {
        firstName: {
          internalUse: false,
          show: false,
        },
        lastName: {
          internalUse: false,
          show: false,
        },
        emailId: {
          internalUse: false,
          show: false,
        },
        phoneNumber: {
          internalUse: false,
          show: false,
        },
        nationality: {
          internalUse: false,
          show: false,
        },
        currentResidence: {
          internalUse: false,
          show: false,
        },
        idNumber: {
          internalUse: false,
          show: false,
        },
        dateOfBirth: {
          internalUse: false,
          show: false,
        },
        gender: {
          internalUse: false,
          show: false,
        },
        personalQuestions: [],
      },
      profile: {
        education: {
          mandatory: false,
          show: false,
        },
        experience: {
          mandatory: false,
          show: false,
        },
        resume: {
          mandatory: false,
          show: false,
        },
        profileQuestions: [],
      },
      customisedQuestions: [],
    },
  },
};
const appFormSlice = createSlice({
  name: "appFormSlice",
  initialState,
  reducers: {
    setInternalUse: (state, action) => {
      const { internalUse, question } = action.payload;
      state.data.attributes.personalInformation[question].internalUse =
        internalUse;
    },
    setShow: (state, action) => {
      const { show, question, type } = action.payload;
      if (type === "profile")
        state.data.attributes.profile[question].show = show;
      else state.data.attributes.personalInformation[question].show = show;
    },
    setMandatory: (state, action) => {
      const { mandatory, question } = action.payload;
      state.data.attributes.profile[question].mandatory = mandatory;
    },
    deleteImg: (state) => {
      state.data.attributes.coverImage = "";
    },
    setImg:(state,action)=>{
      state.data.attributes.coverImage = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      getAppForm.fulfilled,
      (state, action: PayloadAction<AppForm>) => {
        state.data = action.payload.data;
      }
    );
  },
});
export const { setShow, setInternalUse, setMandatory,deleteImg,setImg } = appFormSlice.actions;
export default appFormSlice.reducer;
