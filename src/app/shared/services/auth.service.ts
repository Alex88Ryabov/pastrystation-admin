import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { tap } from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private token: string = '';

    constructor(private http: HttpClient) {

    }

    login(user: User): Observable<{ token: string }> {
        return this.http.post<{ token: string }>(`${environment.apiUrl}/api/auth/login`, user)
            .pipe(
                tap(
                    ({ token }) => {
                        localStorage.setItem('auth-token', token);
                        this.setToken(token);
                    }
                )
            )
    }

    setToken(token: string) {
        this.token = token;
    }

    getToken(): string {
        return this.token;
    }

    isAuthenticated(): boolean {
        return !!this.token;
    }

    logout() {
        this.setToken('');
        localStorage.clear();
    }
}