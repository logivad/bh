import { Injectable } from '@angular/core';

export const STORAGE_KEY_DRAFTS = 'drafts';

// export interface Draft {
//     id?: string;
//     firstStep: any;
//     secondStep: any;
//     thirdStep: any;
// }

@Injectable({
    providedIn: 'root',
})
export class MessagesService {
    async getDraftList() {
        const drafts = this.getFromStorage(STORAGE_KEY_DRAFTS);

        if (!drafts) {
            return [];
        }

        return Object.keys(drafts).map(id => ({
            id,
            ...drafts[id]
        }));
    }

    async saveDraft(data) {
        const id = data.id || Date.now();

        const draft = {
            ...data,
            id,
        };

        await this.saveToStorage(id, draft);
        const drafts = this.getFromStorage(STORAGE_KEY_DRAFTS) || {};
        this.saveToStorage(STORAGE_KEY_DRAFTS, {
            ...drafts,
            [id]: {
                title: draft.thirdStep.title
            },
        });
    }

    saveToStorage(key, value) {
        return new Promise((resolve, reject) => {
            try {
                localStorage.setItem(key, JSON.stringify(value));
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    }

    getFromStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}
