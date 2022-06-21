import React, { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getCategorieItem } from "../../api/categoriesApi";
import BooksItemComponent from "../../components/BooksComponent/BooksItemComponent";
import Button from "../../components/form-elements/Button";
import { AuthContext } from "../../providers/AuthProvider";
import { IBook } from "../librari/LibrariContainer";
import LoaderContainer from "../loader/LoaderContainer";


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

  console.log('categorieItem item', categorieItem)
  return (
    <React.Fragment>
      {loader && <LoaderContainer />}


      {Object.keys(categorieItem).length !== 0 && (

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-col bg-white rounded w-full lg:w-2/2 xl:w-1/3 p-6 divide-y h-fit">
            <div className="flex justify-center mb-6">
              <img className="w-full rounded " src={'https://d1ymz67w5raq8g.cloudfront.net/Pictures/1024x536/P/web/n/z/b/onlinecourses_shutterstock_490891228_2000px_728945.jpg'} />
            </div>

            <div className="flex flex-row py-3 border-none items-start">
              <p className="text-md font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-1/3 text-gray-600 flex flex-row flex-nowrap space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>
                  Name:
                </span>
              </p>
              <p className="text-md font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-2/3 text-gray-900 first-letter:uppercase">{categorieItem?.name}</p>
            </div>
            <div className="flex flex-row py-3 border-none items-start">
              <p className="text-md font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-1/3 text-gray-600 flex flex-row flex-nowrap space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>
                  Number of books:
                </span>
              </p>
              <p className="text-md font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-2/3 text-gray-900 first-letter:uppercase">{categorieItem?.books?.length}</p>
            </div>

            <Button className={'mt-6'}>
              READ THIS BOOK
            </Button>

          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 rounded w-full lg:w-2/2 xl:w-2/3 px-6">
            {categorieItem?.books?.map((item: IBook) => (
              <Link to={`/librari/${item?._id}`} key={item?._id}>
                <BooksItemComponent book={item} />
              </Link>
            ))}
          </div>
        </div>
      )}

    </React.Fragment >
  )
}