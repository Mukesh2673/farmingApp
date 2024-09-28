// src/app/page.tsx
"use client"; // Make sure this file is a Client Component
import { Provider } from 'react-redux';
import {store} from '@/app/store'; // Adjust the path as necessary
import Image from "next/image";
import styles from "./page.module.css";
import HomePage from '@/app/home/page';

export default function Home() {
  return (
    <Provider store={store}> {/* Provide the store here */}
      <>
        <HomePage />
      </>
    </Provider>
  );
}
