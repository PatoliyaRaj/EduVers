import { apiSlice } from "./apiSlice";

export const contactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitContact: builder.mutation({
      query: (contactData) => ({
        url: "/Contact/Create",
        method: "POST",
        body: contactData,
      }),
      invalidatesTags: [{ type: "Contact", id: "LIST" }],
    }),

    getAllContacts: builder.query({
      query: () => "/Contact/Comments",
      providesTags: (result) =>
        result?.contacts
          ? [
              ...result.contacts.map(({ id }) => ({ type: "Contact", id })),
              { type: "Contact", id: "LIST" },
            ]
          : [{ type: "Contact", id: "LIST" }],
    }),

    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/Contact/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Contact", id },
        { type: "Contact", id: "LIST" },
      ],
    }),
  }),
  overrideExisting: false,
});

export const {
  useSubmitContactMutation,
  useGetAllContactsQuery,
  useDeleteContactMutation,
} = contactApi;
