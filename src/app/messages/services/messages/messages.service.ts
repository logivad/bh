import { Injectable } from '@angular/core';

export const STORAGE_KEY_DRAFTS = 'drafts';

export interface SentMessage {
    name: string;
    status: string;
    sentCount: number;
    viewCount: number;
    clickCount: number;
    created: number;
    agent: string;
}

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
            ...drafts[id],
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
                title: draft.thirdStep.title,
            },
        });
    }

    async deleteDraft(id) {
        localStorage.removeItem(id);
        const drafts = this.getFromStorage('drafts');
        delete drafts[id];
        this.saveToStorage('drafts', drafts);
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

    getSentMessages(): Promise<Array<SentMessage>> {
        const row = {
            name: 'minim',
            status: 'active',
            sentCount: 240,
            viewCount: 120,
            clickCount: 1247,

            // для упрощения
            created: Date.now(),
            // created: '15 мая 2020',
            agent: 'Carl Jenkins',
        };

        return Promise.resolve(
            Array.from({ length: 7 })
                .fill(null)
                .map(i => ({ ...row })),
        );
    }
}
