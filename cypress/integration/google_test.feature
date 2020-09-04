Feature: Search by keyword

    Scenario Outline: Search by given system a single keyword
        Given I have visited the Google home page
        When I search by a keyword "<keyword>"
        Then I Should see "<expected>" as a result

        Examples:
            | keyword    | expected          |
            | ความรัก     | Bodyslam - ความรัก |
            | สมเกียรติ    | สมเกียรติ - วิกิพีเดีย  |