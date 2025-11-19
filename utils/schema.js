import { text, varchar, serial } from "drizzle-orm/pg-core";

import { pgTable } from "drizzle-orm/pg-core";


export const MockInterviewSchema = pgTable('mock_interviews',
    {
        id:serial('id').primaryKey(),
        jsonMockResponse:text('jsonMockResponse').notNull(),
        jobPosition:varchar('jobPosition').notNull(),
        jobDescription:varchar('jobDescription').notNull(),
        jobExperience:varchar('jobExperience').notNull(),
        createdAt:varchar('createdAt').notNull(),
        createdBy:varchar('createdBy').notNull(),
        mockId:varchar('mockId').notNull(),
    }
)



//pg table pasun apan fields define karu shakto , pahila argument manjhe tavle cha naav 
//ani dusra argument , {} madhe apan tyache fields define karu shakto broo btw feild manjhech columns 