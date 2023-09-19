import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prod, Product } from '../models/product';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  updateDoc,
} from '@angular/fire/firestore';

const { BASEURL } = environment;
const headers = new HttpHeaders().set('content-type', 'application/json');

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  collectionInstance = collection(this.firestore, 'items');
  products$!: Observable<Product[]>;

  constructor(private http: HttpClient, private firestore: Firestore) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${BASEURL}/api/users`, { headers });
  }

  getAllProduct(): Observable<Prod[]> {
    return this.http.get<Prod[]>(`https://fakestoreapi.com/products`, { headers });
  }

  getProductById(id: number): Observable<Prod> {
    return this.http.get<Prod>(`https://fakestoreapi.com/products/${id}`, { headers });
  }

  fetchProducts(): Observable<Product[]> {
    return collectionData(this.collectionInstance) as Observable<Product[]>;
  }

  addProduct(product: Product) {
    addDoc(this.collectionInstance, product)
      .then(() => {
        /* success */
      })
      .catch((err) => {
        /* error */
      });
  }

  updateProduct(id: string, product: Product) {
    const docInstance = doc(this.firestore, 'items', id);

    return updateDoc(docInstance, { ...product });
  }

  deleteProduct(id: string) {
    const docInstance = doc(this.firestore, 'items', id);

    return deleteDoc(docInstance);
  }
}
