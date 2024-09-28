// components/SearchForm.tsx
import { useState, FormEvent } from 'react';
import styles from '../styles/Home.module.css';

interface SearchFormProps {
  onSearch: (city: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [city, setCity] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className={styles.input}
      />
     <button className={styles.button}>Search</button>
    </form>
  );
};

export default SearchForm;
