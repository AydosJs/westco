import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../../../api/librariApi";
import BooksItemComponent from "../../../components/BooksComponent/BooksItemComponent";
import { AuthContext } from "../../../providers/AuthProvider";
import LoaderContainer from "../../loader/LoaderContainer";
import InfiniteScroll from 'react-infinite-scroll-component';
import { DEFAULT_FILTER } from "../../../constants/Constants";
import LoaderCrads from "../../loader/LoaderCrads";


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

  // ?page=1&limit=13
  const getLibrari = async () => {
    try {
      if (loader) return
      setLoader(true)
      // setBooks({} as PageableData<IBook>)
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

  console.log('books', books)
  return (
    <>
      {loader && <LoaderContainer />}

      <InfiniteScroll
        // pageStart={0}
        dataLength={books.items?.length}
        next={() => updateBooks({ ...filter, offset: books?.items?.length })}
        scrollableTarget="scrollableDiv"
        hasMore={
          books.total > books?.items?.length &&
          books?.items?.length >= books?.limit
        }
        loader={<LoaderCrads />}

      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-h-screen content-start gap-4 h-full">
          {books.total != 0 && books.items.map((book: IBook) => (
            <Link to={`/librari/${book?._id}`} key={book?._id}>
              <BooksItemComponent book={book} />
            </Link>
          ))}

        </div>

      </InfiniteScroll>

    </>
  )
}