import { firestore } from "../../../../lib/firebase"

export const getLikes = (slug : any, callBackFunction: any) => {
    firestore
      .collection('likes')
      .doc(slug)
      .get()
      .then((doc: any) => {
        if (doc.exists) {
          callBackFunction(Object.keys(doc.data()).length)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  export const postLike = (slug: any, callBackFunction: any) => {
    fetch('https://api.ipify.org/?format=json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        firestore
          .collection('likes')
          .doc(slug)
          .set(
            {
              [res['ip']]: null,
            },
            { merge: true }
          )
          .then(callBackFunction)
      })
      .catch((err) => {
        console.error(err)
      })
  }