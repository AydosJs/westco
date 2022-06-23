import React, { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getCategorieItem } from "../../../api/categoriesApi";
import BooksItemComponent from "../../../components/BooksComponent/BooksItemComponent";
import { AuthContext } from "../../../providers/AuthProvider";
import { IBook } from "../librari/LibrariContainer";
import LoaderContainer from "../../loader/LoaderContainer";


export default function CategoriesViewContainer() {
  const { loader, setLoader } = useContext(AuthContext);
  const [categorieItem, setCategorieItem] = useState({} as any)
  const { id } = useParams()

  const getCategorieItemFn = async () => {
    try {
      if (loader) return
      setLoader(true)
      const res = await getCategorieItem(id!)
      setCategorieItem(res?.data?.data)
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    if (id) {
      getCategorieItemFn()
    }
  }, [])

  return (
    <React.Fragment>
      {loader && <LoaderContainer />}


      {Object.keys(categorieItem).length !== 0 && (

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-col bg-white rounded w-full lg:w-2/2 xl:w-1/3 p-6 divide-y h-fit">
            <div className="flex justify-center mb-6">
              <img className="w-full rounded " src={categorieItem?.imgUrl ? `https://coursesnodejs.herokuapp.com/${categorieItem?.imgUrl}` : 'https://www.sicilywelcome.com/assets/images/placeholders/no-img-placeholder.png'} alt={categorieItem?.name} />
            </div>

            <div className="flex flex-row py-3 border-none items-start">
              <p className="text-sm font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-1/3 text-gray-600 flex flex-row flex-nowrap space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>
                  Name:
                </span>
              </p>
              <p className="text-sm font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-2/3 text-gray-900 first-letter:uppercase">{categorieItem?.name}</p>
            </div>
            <div className="flex flex-row py-3  items-start">
              <p className="text-sm font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-1/3 text-gray-600 flex flex-row flex-nowrap space-x-2 items-center">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>
                  Books:
                </span>
              </p>
              <p className="text-sm font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-2/3 text-gray-900 first-letter:uppercase">{categorieItem?.books?.length}</p>
            </div>

            <div className="flex flex-col py-3 items-start">
              <p className="text-sm font-medium w-full text-gray-600 flex flex-row flex-nowrap space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>
                  Description:
                </span>
              </p>
              <p className="text-sm font-medium mt-4 w-full text-gray-900 first-letter:uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facilis aspernatur consectetur eaque.</p>
            </div>

            {/* <Button className={'mt-6'}>
              READ THIS BOOK
            </Button> */}

          </div>

          {categorieItem?.books?.length !== 0 ? (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 rounded w-full lg:w-2/2 xl:w-2/3 p-0 lg:px-6">
              {categorieItem?.books?.map((item: IBook) => (
                <Link to={`/librari/${item?._id}`} key={item?._id} className="h-fit">
                  <BooksItemComponent book={item} />
                </Link>
              ))}
            </div>

          ) : (<div className="w-full flex items-center justify-center bg-white lg:w-2/2 xl:w-2/3 px-6"><p className="text-sm font-medium text-center">There is nothis yet !</p></div>)}
        </div>
      )
      }

    </React.Fragment >
  )
}