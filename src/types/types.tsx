export interface CaseTask {
    teamName: string;
    id: string;
    defect_created: boolean;
    redirected_team?: string;
}

export interface CaseTaskListData {
    data: CaseTask[] | null;
}