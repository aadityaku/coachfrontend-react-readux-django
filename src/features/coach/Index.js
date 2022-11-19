import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const indexApi = createApi({
    reducerPath:'indexApi',

    baseQuery: fetchBaseQuery({
        baseUrl:'http://127.0.0.1:8000/api/'
    }),
    endpoints: (builder) => ({
        getAllCourse: builder.query({
            query: () => ({
                url: 'course/',
                method: 'GET'
            })
        }),

        registerStudent: builder.mutation({
            query: (data) => ({
                url:'register/',
                method:'POST',
                body: data,
                headers:{
                    'Content-type':'application/json'
                }
            })
        }),
        loginStudent:builder.mutation({
            query: (data) => {
               
                return {
                url: 'login/',
                method:'POST',
                body: data,
                headers:{
                    'Content-type':'application/json'
                }
                }
            }
        }),
        loginRefreshStudent:builder.mutation({
            query: (data) => {
                return {
                url: 'login/refresh/',
                method:'POST',
                body: data,
                
                }
            }
        }),
        addCourse:builder.mutation({
            query: ({slug,access_token}) => {
                return {
                    url:`add-course/${slug}/`,
                    method:"POST",
                    headers: {
                        'authorization':`Bearer ${access_token}`,
                    }

                }
            }
        })
    })


})
export const { useGetAllCourseQuery,useRegisterStudentMutation,useLoginStudentMutation,useLoginRefreshStudentMutation,useAddCourseMutation} = indexApi