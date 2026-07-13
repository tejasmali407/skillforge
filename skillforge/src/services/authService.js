import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import useAuthStore from '../store/authStore';
import { toast } from 'sonner';

export const authService = {
  signup: async (email, password, name) => {
    const { setLoading, setError, setUser } = useAuthStore.getState();
    setLoading(true);
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;

      const userData = {
        uid: newUser.uid,
        name,
        email,
        photoURL: '',
        role: 'user',
        xp: 0,
        level: 1,
        coins: 0,
        currentPath: null,
        completedLessons: [],
        completedProjects: [],
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      await setDoc(doc(db, 'users', newUser.uid), userData);
      setUser(userData);
      toast.success('Account created successfully!');
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  },

  login: async (email, password) => {
    const { setLoading, setError } = useAuthStore.getState();
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Logged in successfully!');
    } catch (err) {
      setError(err.message);
      toast.error('Invalid email or password');
      throw err;
    } finally {
      setLoading(false);
    }
  },

  logout: async () => {
    const { setLoading, setError, setUser } = useAuthStore.getState();
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      toast.success('Logged out successfully!');
    } catch (err) {
      setError(err.message);
      toast.error('Error logging out');
      throw err;
    } finally {
      setLoading(false);
    }
  }
};

export const { signup, login, logout } = authService;
export default authService;
