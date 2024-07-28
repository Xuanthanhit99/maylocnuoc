import { useState } from 'react'
import firebase, { firestore } from "../../../../lib/firebase"


export const getComments = (slug: any, callBackFunction: any) => {
    firestore
      .collection('comments')
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs
          .map((doc) => doc.data())
          .filter((doc) => doc.slug === slug)
          .map((doc) => {
            return { id: doc.id, ...doc }
          })
        callBackFunction(posts)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  export const writeComment = (name: any, slug: any, content: any, email: any, callBackFunction: any) => {
    let temp = {
      name,
      slug,
      content,
      time: firebase.firestore.Timestamp.fromDate(new Date()),
      email: email
    }
    // if (email.length > 0) temp['email'] = email
    firestore
      .collection('comments')
      .add(temp)
      .then(() => {
        callBackFunction()
      })
      .catch((err) => {
        console.error(err)
      })
  }
