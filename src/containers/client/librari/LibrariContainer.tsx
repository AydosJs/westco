import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../../../api/librariApi";
import BooksItemComponent from "../../../components/BooksComponent/BooksItemComponent";
import { AuthContext } from "../../../providers/AuthProvider";
import LoaderContainer from "../../loader/LoaderContainer";
import InfiniteScroll from 'react-infinite-scroll-component';
import { DEFAULT_FILTER } from "../../../constants/Constants";
import LoaderCrads from "../../loader/LoaderCrads";
import TextField from "../../../components/form-elements/TextField";


export interface PageableData<T> {
  total: number,
  items: T[],
  limit: number
}

export interface IAuther {
  _id?: string,
  fullName: string,
  imgUrl: string
}

export interface IBook {
  _id?: string,
  name: string,
  imgUrl: string,
  authorId?: string,
  categoryId?: string,
  ebookUrl?: string,
  description: string,

  author?: IAuther
}

export interface IQueryFilter {
  page?: number
  limit: number
  sort?: 'asc' | 'desc'
  search?: string
}


export default function LibrariContainer() {
  const { loader, setLoader } = useContext(AuthContext);
  const filter: IQueryFilter = DEFAULT_FILTER
  const [books, setBooks] = useState<PageableData<IBook>>({
    items: [],
    total: 0,
    limit: filter?.limit
  })

  const getLibrari = async () => {
    try {
      if (loader) return
      setLoader(true)
      const res = await getBooks(filter)
      setBooks({
        ...books,
        total: res.data?.data?.total,
        items: res.data?.data?.data,
      })
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    getLibrari()
  }, [])

  const updateBooks = async (payload: any) => {
    if (
      !books?.items?.length ||
      loader ||
      (books.total < payload.offset && payload.offset <= 0)
    )
      return
    try {
      console.log('update log ->', payload, loader, books)

      const response: any = await getBooks(payload)
      const items = [
        ...books.items,
        ...((response.data?.data?.data as IBook[]) || []),
      ]

      setBooks({ ...books, items: items })
    } catch (error) {
      console.error('books items is error ', error)
    } finally {
      setLoader(false)
    }
  }

  return (
    <>
      {loader && <LoaderContainer />}

      {/* Search */}
      {/* <div className="mt-2 flex flex-row space-x-2">
        <div className="w-5/6">
          <TextField className="rounded-lg" placeholder="search..." />
        </div>
        <div className="mb-2 w-1/6">
          <select
            id="categoryId"
            name="categoryId"
            className="w-full bg-white rounded border outline-none text-gray-700 border-gray-300 text-sm block p-2.5 cursor-pointer ">
            <option value={'USA'}>USA</option>
            <option value={'USA'}>USA</option>
            <option value={'USA'}>USA</option>
            <option value={'USA'}>USA</option>
          </select>
        </div>
      </div> */}

      {/* <InfiniteScroll
        // pageStart={0}
        dataLength={books.items?.length}
        next={() => updateBooks({ ...filter, offset: books?.items?.length })}
        scrollableTarget="scrollableDiv"
        hasMore={
          books.total > books?.items?.length &&
          books?.items?.length >= books?.limit
        }
        loader={<LoaderCrads />}

      > */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-h-screen content-start gap-4 h-full">
        {books.total != 0 && books.items.map((book: IBook) => (
          <Link to={`/librari/${book?._id}`} key={book?._id}>
            <BooksItemComponent book={book} />
          </Link>
        ))}

      </div>

      {/* </InfiniteScroll> */}

    </>
  )
}