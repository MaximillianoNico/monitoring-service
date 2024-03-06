import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { username: "user-1" },
        { username: "user-2" },
        { username: "user-3" }
    ]);

    await knex("user_storage").del()

    await knex("user_storage").insert([
        { user_id: 1, totalStorage: 4194304 }, // user used 4mb
        { user_id: 2, totalStorage: 1048576 }, // user used 4mb
    ])
};
