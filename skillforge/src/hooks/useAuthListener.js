import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import useAuthStore from '../store/authStore';

export const useAuthListener = () => {
  const { setUser, setLoading, setError } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const userDocRef = doc(db, 'users', firebaseUser.uid);
          const userDocSnap = await getDoc(userDocRef);
          
          if (userDocSnap.exists()) {
            const data = userDocSnap.data();
            setUser({ 
              uid: firebaseUser.uid, 
              ...data,
              email: firebaseUser.email || data.email,
              name: data.displayName || firebaseUser.displayName || data.username || (firebaseUser.email ? firebaseUser.email.split('@')[0] : 'Developer'),
              photoURL: data.photoURL || firebaseUser.photoURL || '',
              level: data.level || 1,
              xp: data.xp || 0,
              coins: data.coins || 0,
              streak: data.streak || 0,
            });
          } else {
            // Fallback if doc doesn't exist but auth does
            setUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              name: firebaseUser.displayName || (firebaseUser.email ? firebaseUser.email.split('@')[0] : 'Developer'),
              photoURL: firebaseUser.photoURL || '',
              level: 1,
              xp: 0,
              coins: 0,
              streak: 0,
            });
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
          setError(err.message);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setUser, setLoading, setError]);
};

export default useAuthListener;
