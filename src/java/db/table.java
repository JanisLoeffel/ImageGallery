package db;

import java.sql.*;

public class table {

    public static void main(String[] args) {

        try {
            //Get connection
            Connection myConn = DriverManager.getConnection("jdbc:mysql://localhost:3306/imagegallery", "root", "1234" );

            //Create statement
            Statement myStmt = myConn.createStatement();

            //Execute SQL query
            ResultSet rs = myStmt.executeQuery("select * from images where id = '1'");

            //process result
            while (rs.next()) {
                System.out.println(rs.getInt("id"));
            }


        } catch (SQLException e) {
            e.printStackTrace();
        }

        //  LaunchPage launchpage = new LaunchPage();
    }
}
