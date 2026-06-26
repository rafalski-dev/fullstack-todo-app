export type TodoData = {
	id: number;
	content: string;
	done: boolean;
	editing: boolean;
};

export type Category = 'Active' | 'Done' | 'All';

export type AppError = {
	code: string | number;
};
