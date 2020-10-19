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

    getDraftById(id) {
        return Promise.resolve(this.getFromStorage(id));
    }

    async saveDraft(draft) {
        await this.saveToStorage(draft.id, draft);
        const drafts = this.getFromStorage(STORAGE_KEY_DRAFTS) || {};
        this.saveToStorage(STORAGE_KEY_DRAFTS, {
            ...drafts,
            [draft.id]: {
                title: draft.thirdStep.title
            },
        });
    }

    async deleteDraft(id) {
        localStorage.removeItem(id);
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
