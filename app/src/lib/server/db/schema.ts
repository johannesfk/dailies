import { create } from 'domain';
import {
	pgTable,
	serial,
	text,
	integer,
	timestamp,
	uuid,
	numeric,
	jsonb
} from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull()
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;

export const project = pgTable('project', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	createAt: timestamp('created_at', { withTimezone: true, mode: 'date' }).notNull(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id)
});

export type Project = typeof project.$inferSelect;

export const task = pgTable('task', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	createdAt: timestamp('created_at', { withTimezone: true, mode: 'date' }).notNull(),
	projectId: text('project_id')
		.notNull()
		.references(() => project.id)
});

export type Task = typeof task.$inferSelect;

export const video = pgTable('video', {
	id: uuid('id').primaryKey(),
	scene: text('scene'),
	shot: text('shot'),
	take: text('take'),
	camera: text('camera'),
	fps: numeric('fps'),
	filename: text('filename').notNull(),
	ale_metadata: jsonb('ale_metadata'),
	spriteUrl: text('sprite_url'),
	spriteVttUrl: text('sprite_vtt_url'),
	status: text('status').notNull().default('pending'), // pending, uploaded, transcoded, ready
	s3RawUrl: text('s3_raw_url'),
	s3TranscodedUrl: text('s3_transcoded_url'),
	createdAt: timestamp('created_at', { withTimezone: true, mode: 'date' }).notNull(),
	taskId: text('task_id')
		.notNull()
		.references(() => task.id)
});
