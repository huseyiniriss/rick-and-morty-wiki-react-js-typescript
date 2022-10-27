import React, {useEffect} from 'react';
import {PageTitle} from "../utils/types";
import {IPageWrapper} from "../utils/interfaces";
import {Layout, Spin} from "antd";
import NavigationBar from "./NavigationBar";

const DEFAULT_TITLE: PageTitle = 'Rick and Morty Wiki';
const PageWrapper = ({children, isLoading, error, title}: IPageWrapper) => {
  useEffect(() => {
    if (title) {
      window.document.title = `${title} | ${DEFAULT_TITLE}`;
    }
  }, [title])

  return (
    <>
      <NavigationBar/>
      <Layout style={{padding: 24}}>
        {isLoading && <Spin />}
        {error && <p>ERROR : {error.toString()}</p>}
        {children}
      </Layout>
    </>
  )
};


export default PageWrapper;